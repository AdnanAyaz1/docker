function TodoListSkeleton() {
  return (
    <div className="max-h-96 overflow-y-auto px-6 sm:px-8 py-6">
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
        <span className="ml-3 text-gray-600">Loading todos...</span>
      </div>
    </div>
  );
}

export default TodoListSkeleton;
