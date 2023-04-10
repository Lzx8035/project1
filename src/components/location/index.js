import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1281.2764632764101!2d-123.16013195759378!3d49.23466476431636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54867470a7981163%3A0xc53ee7e00db82a44!2sSaint%20Germain%20Bakery!5e0!3m2!1szh-CN!2sca!4v1681101512839!5m2!1szh-CN!2sca"
        width="100%"
        height="500px"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        title="ggmap"
      ></iframe>
      <div className="location_tag">
        <div>location</div>
      </div>
    </div>
  );
};

export default Location;
