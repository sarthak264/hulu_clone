import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import { forwardRef } from "react";

const Thumbnail = forwardRef(({ data }, ref) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="thumbnail" ref={ref}>
      <Image
        src={
          `${base_url}${data.backdrop_path || data.poster_path}` ||
          `${base_url}${data.poster_path}`
        }
        height={1080}
        width={1920}
      />
      <div className="details">
        <h3>{data.title || data.original_name}</h3>
        {/* <p className="description">{data.overview}</p> */}
        <div className="hidden">
          <p>
            {data.media_type && `${data.media_type} `}&middot;{" "}
            {data.release_date || data.first_air_date} &middot;{" "}
            <ThumbUpIcon className="like_icon" /> {data.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
});

Thumbnail.displayName = "Thumbnail";

export default Thumbnail;
