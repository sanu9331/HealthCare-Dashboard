const AnatomySection = () => {
  return (
    <div className="bg-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm h-64 sm:h-80 lg:h-96">
      <div className="relative h-full rounded-xl overflow-hidden">
        {/* Human body anatomical image */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <img src="/images/anatomy-image-2.png" alt="Human Anatomy" className="h-48 sm:h-64 lg:h-80 w-auto object-contain" />
            {/* Health indicator */}
            <div className="absolute top-8 sm:top-12 lg:top-16 left-1/2 transform -translate-x-1/2">
              <div className="bg-blue-900 text-white px-2 sm:px-3 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Healthy Heart</span>
              </div>
            </div>
          </div>
        </div>
        {/* Healthy Log button */}
        <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4">
          <button className="bg-cyan-400 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium">Healthy Log</button>
        </div>
      </div>
    </div>
  )
}

export default AnatomySection
