export default function SkeletonLoader() {
  return (
    <div className="animate-pulse space-y-4">
      <div className="h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/3 mb-4"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Skeleton untuk foto */}
        <div className="h-64 bg-gray-200 dark:bg-gray-700 rounded-lg"></div>
        
        {/* Skeleton untuk data */}
        <div className="space-y-3">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex border-b py-2">
              <div className="w-1/3 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="w-2/3 h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Skeleton untuk keluarga */}
      <div className="mt-8">
        <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="p-4 border rounded flex items-center gap-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="flex-1 space-y-2">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}