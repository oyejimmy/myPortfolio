export default function Experience() {
  return (
    <>
      <div className="px-7 py-7">
        <h1 className="flex items-center gap-x-2 text-lg font-medium">
          <div className="w-4 h-2 bg-yellow-600 rounded-full"></div>
          Projects
        </h1>
      </div>

      <div className="px-7 py-7 verflow-hidden flex items-center justify-center border border-gray-200 hidden md:block">
        <div>
          <div>
            <h1 className="flex items-center gap-x-2 text-lg font-medium">
              <div className="w-2 h-2 bg-green-600 rounded-full"></div>
              My active projects
            </h1>
            <br />
            <strong>
              Stay tuned for updates on my active projects, which will be
              showcased here soon...
            </strong>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
