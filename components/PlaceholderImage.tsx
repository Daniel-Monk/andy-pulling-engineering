interface Props {
  label?: string;
  className?: string;
  aspect?: string;
}

export default function PlaceholderImage({ label = 'Photo coming soon', className = '', aspect = 'aspect-video' }: Props) {
  return (
    <div className={`${aspect} bg-gray-800 rounded-lg flex flex-col items-center justify-center border border-gray-700 ${className}`}>
      <svg className="w-10 h-10 text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
      <span className="text-gray-500 text-xs text-center px-4">{label}</span>
    </div>
  );
}
