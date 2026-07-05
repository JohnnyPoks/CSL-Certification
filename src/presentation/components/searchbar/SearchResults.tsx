import { ISearchResult } from "@/domain/interfaces";

const SearchResult = ({ result }: { result: ISearchResult }) => {
  switch (result.type) {
    case "course":
      return (
        <div className="flex items-center py-3 px-2 border-b hover:bg-green-pea/10 cursor-pointer rounded-md">
          <img
            src={result.thumbnail}
            alt={result.title}
            className="w-16 h-16 object-cover rounded mr-3"
          />
          <div>
            <h4 className="font-medium text-gray-900">{result.title}</h4>
            <p className="text-sm">By {result.instructor}</p>
            <div className="flex items-center text-sm text-green-pea">
              <span>{result.rating} ★</span>
              <span className="mx-2">•</span>
              <span>{result.students.toLocaleString()} students</span>
            </div>
          </div>
        </div>
      );
    // Add other result type cases here
    default:
      return (
        <div className="flex items-center space-x-3 p-2 px-3 hover:bg-green-pea/10 rounded-md">
          <div className="flex-1">
            <h4 className="font-medium text-gray-900">{result.title}</h4>
            <p className="text-sm text-gray-500">By {result.instructor}</p>
            <div className="flex items-center text-sm text-green-pea">
              <span>{result.rating} ★</span>
              <span className="mx-2">•</span>
              <span>{result.students.toLocaleString()} students</span>
            </div>
          </div>
        </div>
      );
  }
};

export default SearchResult;
