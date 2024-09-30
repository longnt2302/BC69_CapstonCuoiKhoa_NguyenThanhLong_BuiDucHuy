export const Agents = () => {
  return (
    <section className="color-bg small-padding">
      <div className="container">
        <div className="main-facts fl-wrap">
          <div className="inline-facts-wrap">
            <div className="inline-facts">
              <div className="milestone-counter">
                <div className="stats animaper">
                  <div className="num" data-content="0" data-num="578">
                    0
                  </div>
                </div>
              </div>
              <h6>Agents and Agencys</h6>
            </div>
          </div>

          <div className="inline-facts-wrap">
            <div className="inline-facts">
              <div className="milestone-counter">
                <div className="stats animaper">
                  <div className="num" data-content="0" data-num="12168">
                    0
                  </div>
                </div>
              </div>
              <h6>Happy Customers Every Year</h6>
            </div>
          </div>

          <div className="inline-facts-wrap">
            <div className="inline-facts">
              <div className="milestone-counter">
                <div className="stats animaper">
                  <div className="num" data-content="0" data-num="2172">
                    0
                  </div>
                </div>
              </div>
              <h6>Won Awards</h6>
            </div>
          </div>

          <div className="inline-facts-wrap">
            <div className="inline-facts">
              <div className="milestone-counter">
                <div className="stats animaper">
                  <div className="num" data-content="0" data-num="732">
                    0
                  </div>
                </div>
              </div>
              <h6>New Listing Every Week</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="svg-bg">
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="100%"
          height="100%"
          viewBox="0 0 1600 900"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="bg">
              <stop offset="0%" style={{ stopColor: `rgba(255, 255, 255, 0.6)` }}></stop>
              <stop offset="50%" style={{ stopColor: `rgba(255, 255, 255, 0.1)` }}></stop>
              <stop offset="100%" style={{ stopColor: `rgba(255, 255, 255, 0.6)` }}></stop>
            </linearGradient>
            <path
              id="wave"
              stroke="url(#bg)"
              fill="none"
              d="M-363.852,502.589c0,0,236.988-41.997,505.475,0
                                        s371.981,38.998,575.971,0s293.985-39.278,505.474,5.859s493.475,48.368,716.963-4.995v560.106H-363.852V502.589z"
            />
          </defs>
          <g>
            <use xlinkHref="#wave">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="10s"
                calcMode="spline"
                values="270 230; -334 180; 270 230"
                keyTimes="0; .5; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="8s"
                calcMode="spline"
                values="-270 230;243 220;-270 230"
                keyTimes="0; .6; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="6s"
                calcMode="spline"
                values="0 230;-140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
            <use xlinkHref="#wave">
              <animateTransform
                attributeName="transform"
                attributeType="XML"
                type="translate"
                dur="12s"
                calcMode="spline"
                values="0 240;140 200;0 230"
                keyTimes="0; .4; 1"
                keySplines="0.42, 0, 0.58, 1.0;0.42, 0, 0.58, 1.0"
                repeatCount="indefinite"
              />
            </use>
          </g>
        </svg>
      </div>
    </section>
  );
};
