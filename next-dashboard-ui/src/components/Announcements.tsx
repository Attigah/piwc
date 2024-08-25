const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-md">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lamaSkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Midweek Service</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              Every Wednesday - 9:00 AM
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Join us for our midweek service every Wednesday at 9:00 AM. Let’s come together for a time of prayer, worship, and the Word.
          </p>
        </div>
        <div className="bg-lamaPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Saturday Morning Prayer</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              Every Saturday - 7:00 AM
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Our early morning prayer sessions are held every Saturday at 7:00 AM. It’s a powerful time to start your weekend with prayer.
          </p>
        </div>
        <div className="bg-lamaYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Sunday Worship Service</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              Every Sunday - 8:00 AM
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Don’t miss our main worship service every Sunday at 8:00 AM. Come and be blessed as we worship together and hear the Word of God.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;