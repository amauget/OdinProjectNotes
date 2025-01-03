import { NavLink } from 'react-router-dom';

/* SEE ALL METHODS AT https://blog.logrocket.com/modern-api-data-fetching-methods-react/ */

const FetchGetRequest = () => {
  // ...

  return (
    <div className="flex">
      <div className="w-52 sm:w-80 flex justify-center items-center">
        {loading && (
          <div className="text-xl font-medium">Loading posts...</div>
        )}
        {error && <div className="text-red-700">{error}</div>}

        <ul>
          {data &&
            data.map(({ id, title }) => (
              <li
                key={id}
                className="border-b border-gray-100 text-sm sm:text-base"
              >
                <NavLink
                  className={({ isActive }) => {
                    const baseClasses = 'p-4 block hover:bg-gray-100';
                    return isActive
                      ? `${baseClasses} bg-gray-100`
                      : baseClasses;
                  }}
                  to={`/posts/${id}`}
                >
                  {title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>

      <div className="bg-gray-100 flex-1 p-4 min-h-[550px]">
        Single post here...
      </div>
    </div>
  );
};

export default FetchGetRequest;