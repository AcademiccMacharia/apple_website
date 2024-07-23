export const animateWithGsapTimeline = (timeline, rotationRef, rotationState, firstTarget, secondTarget, animationProps) => {
    timeline.to(rotationRef.current.rotation, {
        duration: 1,
        y: rotationState,
        ease: 'power2.inOut'
    })

    timeline.to(firstTarget, {
        ...animationProps,
        ease: 'power2.inOut',
    },
    '<'
    )

    timeline.to(secondTarget, {
        ...animationProps,
        ease: 'power2.inOut',
    },
    '<'
    )
}