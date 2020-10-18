import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.9596818588516!2d72.87174381421467!3d19.196963253149203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b71520f76129%3A0xc53118abc4692386!2sGolden+Palace+Apartments%2C+Mira+Road+East%2C+MHADA+Colony%2C+Lokhandwala+Twp%2C+Kandivali+East%2C+Mumbai%2C+Maharashtra+400101!5e0!3m2!1sen!2sin!4v1550073379172" 
                    width="100%" 
                    height="500px" 
                    frameBorder="0" 
                    allowFullScreen>
            </iframe>

            <div className="location_tag">
                <div>LOCATION</div>
            </div>
        </div>
    );
};

export default Location;