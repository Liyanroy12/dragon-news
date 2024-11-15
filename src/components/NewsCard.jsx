import { FaStar, FaRegBookmark, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const {author, image_url, total_view, rating, title, details} = news;
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full mx-auto my-2">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center">
          <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <h2 className="font-semibold text-sm">{author.name}</h2>
            <p className="text-gray-500 text-xs">{author.published_date}</p>
          </div>
        </div>
        <div className="flex space-x-2 text-gray-500">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h3 className="px-4 text-lg font-semibold leading-tight">
        {title}
      </h3>

      {/* Image */}
      <img
        src={image_url}
        alt="Thumbnail"
        className="w-full object-cover my-3"
      />

      {/* Content */}
      <div className="px-4">
        <p className="text-gray-600 text-sm mb-2">
          Wednesday, August 24, 2022 | Tag Cloud Tags: Biden, EU, Euro, Europe, Joe Biden, Military, News, Russia, Security, UK, Ukraine...
        </p>
        <p className="text-gray-600 text-sm line-clamp-3 mb-2">
          {details}
        </p>
        <Link to={`/news/${news._id}`} className="text-blue-500 font-semibold mb-4">Read More</Link>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-4 py-3 border-t border-gray-200">
        <div className="flex items-center text-yellow-500">
          <FaStar />
          <span className="ml-1 font-semibold">{rating.number}</span>
        </div>
        <div className="text-gray-500 text-sm">{total_view}</div>
      </div>
    </div>
  );
};

export default NewsCard;
