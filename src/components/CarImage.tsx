interface CarImageProps {
  src?: string
  alt: string
  className?: string
}

export default function CarImage({ src, alt, className = '' }: CarImageProps) {
  if (!src) {
    return (
      <div className={`car-image placeholder ${className}`} role="img" aria-label={alt}>
        <span>Car photo</span>
      </div>
    )
  }
  return <img className={`car-image ${className}`} src={`${import.meta.env.BASE_URL}${src}`} alt={alt} />
}
