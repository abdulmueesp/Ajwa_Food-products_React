import React from "react";

const Map = () => {
  return (
    <div>
      <div className="relative w-full h-[250px] sm:h-[300px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1084.3258256593078!2d76.16993692414498!3d10.902254459761306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba7c99896cf861f%3A0xc3323a35082aa23!2sAjwa%20products!5e0!3m2!1sen!2sin!4v1727383867648!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
