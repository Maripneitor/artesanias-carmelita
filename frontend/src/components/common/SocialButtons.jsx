// frontend/src/components/common/SocialButtons.jsx
import React from 'react';

/**
 * Bloque de botones de redes sociales adaptado para Artesanías Carmelita
 * Basado en diseño de Uiverse (Praashoo7) pero con redes sociales relevantes
 * 
 * @param {string} variant - 'footer' | 'contact' para diferentes estilos (opcional)
 */
const SocialButtons = ({ variant = 'default' }) => {
    const socialLinks = {
        instagram: 'https://instagram.com/artesaniascarmelita', // TODO: Reemplazar con URL real
        facebook: 'https://facebook.com/artesaniascarmelita', // TODO: Reemplazar con URL real
        whatsapp: 'https://wa.me/[NUMERO]', // TODO: Reemplazar con número real
        tiktok: 'https://tiktok.com/@artesaniascarmelita' // TODO: Reemplazar con URL real
    };

    return (
        <div className={`social-buttons-main ${variant}`}>
            <div className="social-buttons-up">
                <a
                    href={socialLinks.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card social-card-1"
                    aria-label="Síguenos en Instagram"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0,0,256,256"
                        width="30px"
                        height="30px"
                        fillRule="nonzero"
                        className="social-icon social-instagram"
                    >
                        <g fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                            <g transform="scale(8,8)">
                                <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z"></path>
                            </g>
                        </g>
                    </svg>
                </a>
                <a
                    href={socialLinks.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card social-card-2"
                    aria-label="Síguenos en Facebook"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="30px"
                        height="30px"
                        className="social-icon social-facebook"
                    >
                        <path d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path>
                        <path fill="#fff" d="M29.368,24H26v12h-5V24h-3v-4h3v-2.41c0-3.02,1.516-4.59,4.571-4.59H29v4h-2.756C25.093,17,25,17.459,25,18.486V20h4L29.368,24z"></path>
                    </svg>
                </a>
            </div>
            <div className="social-buttons-down">
                <a
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card social-card-3"
                    aria-label="Contáctanos por WhatsApp"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="30px"
                        height="30px"
                        className="social-icon social-whatsapp"
                    >
                        <path d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path>
                        <path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path>
                        <path fill="#fff" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path>
                        <path fill="#cfd8dc" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path>
                        <path fill="#40c351" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z"></path>
                    </svg>
                </a>
                <a
                    href={socialLinks.tiktok}
                    target="_blank"
                    rel="noreferrer"
                    className="social-card social-card-4"
                    aria-label="Síguenos en TikTok"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="30px"
                        height="30px"
                        className="social-icon social-tiktok"
                    >
                        <path d="M38.4,21.68c-3.28,0-6.25-1.32-8.42-3.45v15.62c0,7.81-6.33,14.15-14.15,14.15S1.68,41.66,1.68,33.85 s6.33-14.15,14.15-14.15c0.31,0,0.61,0.01,0.91,0.04v7.04c-0.3-0.04-0.6-0.09-0.91-0.09c-3.93,0-7.12,3.19-7.12,7.12 s3.19,7.12,7.12,7.12s7.12-3.19,7.12-7.12V2h6.77c0,0.43,0.03,0.86,0.08,1.28c0.54,4.69,4.18,8.52,8.79,9.43v7.08 C38.54,19.78,38.47,19.73,38.4,21.68z"></path>
                    </svg>
                </a>
            </div>
        </div>
    );
};

export default SocialButtons;
