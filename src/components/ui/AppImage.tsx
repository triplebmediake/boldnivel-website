'use client';

import React, { useState, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';

interface AppImageProps {
    src: string;
    alt: string;
    width?: number;
    height?: number;
    className?: string;
    priority?: boolean;
    quality?: number;
    placeholder?: 'blur' | 'empty';
    blurDataURL?: string;
    fill?: boolean;
    sizes?: string;
    onClick?: () => void;
    fallbackSrc?: string;
    loading?: 'lazy' | 'eager';
    unoptimized?: boolean;
    [key: string]: any;
}

/**
 * Base path used when the site is deployed to GitHub Pages.
 *
 * GitHub Pages serves this repository at:
 * /boldnivel-website/
 *
 * For the eventual production domain (boldnivel.com),
 * NEXT_PUBLIC_BASE_PATH can be left empty.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Resolve local image paths correctly for both:
 *
 * GitHub Pages:
 * /boldnivel-website/founder.jpg
 *
 * Production:
 * /founder.jpg
 */
function resolveImagePath(src: string): string {
    if (!src || BASE_PATH === '') {
        return src;
    }

    // Don't modify external URLs
    if (
        src.startsWith('http://') ||
        src.startsWith('https://') ||
        src.startsWith('//') ||
        src.startsWith('data:') ||
        src.startsWith('blob:')
    ) {
        return src;
    }

    // Don't add the base path twice
    if (src === BASE_PATH || src.startsWith(`${BASE_PATH}/`)) {
        return src;
    }

    // Add base path to root-relative paths
    if (src.startsWith('/')) {
        return `${BASE_PATH}${src}`;
    }

    // Also handle relative paths
    return `${BASE_PATH}/${src}`;
}

const AppImage = memo(function AppImage({
    src,
    alt,
    width,
    height,
    className = '',
    priority = false,
    quality = 85,
    placeholder = 'empty',
    blurDataURL,
    fill = false,
    sizes,
    onClick,
    fallbackSrc = '/assets/images/no_image.png',
    loading = 'lazy',
    unoptimized = false,
    ...props
}: AppImageProps) {
    const resolvedSrc = useMemo(() => resolveImagePath(src), [src]);
    const resolvedFallbackSrc = useMemo(
        () => resolveImagePath(fallbackSrc),
        [fallbackSrc]
    );

    const [imageSrc, setImageSrc] = useState(resolvedSrc);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const isExternalUrl = useMemo(
        () =>
            typeof imageSrc === 'string' &&
            (
                imageSrc.startsWith('http://') ||
                imageSrc.startsWith('https://') ||
                imageSrc.startsWith('//')
            ),
        [imageSrc]
    );

    const resolvedUnoptimized = unoptimized || isExternalUrl;

    const handleError = useCallback(() => {
        if (!hasError && imageSrc !== resolvedFallbackSrc) {
            setImageSrc(resolvedFallbackSrc);
            setHasError(true);
        }

        setIsLoading(false);
    }, [hasError, imageSrc, resolvedFallbackSrc]);

    const handleLoad = useCallback(() => {
        setIsLoading(false);
        setHasError(false);
    }, []);

    const imageClassName = useMemo(() => {
        const classes = [className];

        if (isLoading) {
            classes.push('bg-gray-200');
        }

        if (onClick) {
            classes.push(
                'cursor-pointer hover:opacity-90 transition-opacity duration-200'
            );
        }

        return classes.filter(Boolean).join(' ');
    }, [className, isLoading, onClick]);

    const imageProps = useMemo(() => {
        const baseProps: any = {
            src: imageSrc,
            alt,
            className: imageClassName,
            quality,
            placeholder,
            unoptimized: resolvedUnoptimized,
            onError: handleError,
            onLoad: handleLoad,
            onClick,
        };

        if (priority) {
            baseProps.priority = true;
        } else {
            baseProps.loading = loading;
        }

        if (blurDataURL && placeholder === 'blur') {
            baseProps.blurDataURL = blurDataURL;
        }

        return baseProps;
    }, [
        imageSrc,
        alt,
        imageClassName,
        quality,
        placeholder,
        blurDataURL,
        resolvedUnoptimized,
        priority,
        loading,
        handleError,
        handleLoad,
        onClick,
    ]);

    if (fill) {
        return (
            <div
                className="relative"
                style={{ width: '100%', height: '100%' }}
            >
                <Image
                    {...imageProps}
                    fill
                    sizes={
                        sizes ||
                        '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    }
                    style={{ objectFit: 'cover' }}
                    {...props}
                />
            </div>
        );
    }

    return (
        <Image
            {...imageProps}
            width={width || 400}
            height={height || 300}
            sizes={sizes}
            {...props}
        />
    );
});

AppImage.displayName = 'AppImage';

export default AppImage;
