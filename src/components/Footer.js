import React from 'react'


class Footer extends React.Component {
  render() {
    return (
<section className='mt6'>
<footer className="pv4 ph3 ph5-ns tc footer">
  <a className="link dim round dib h3 w2-5  mr6 pa2 grow"  target='blank' href="https://github.com/gcmillar" title='Github'>
          <svg data-icon="github" viewBox="0 0 32 32" style={{fill: '#2D3539'}}>
            <title>github icon</title>
            <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z" />
          </svg>
        </a>
        <a className="link dim round dib h3 w2-5  mr6 pa2 grow"  target='blank' href="https://scholar.google.com/citations?user=BaZoAUgAAAAJ&hl=en" title='Google Scholar'>
          
          <svg viewBox="0 0 1755 1755" xmlns="http://www.w3.org/2000/svg"><path transform="translate(0 1610) scale(1 -1)" path fill="#2D3539"  d="M896.76 1130.189c-27.618 30.838-59.618 46.19-95.802 46.19-40.952 0-72.382-14.738-94.288-44.15-21.906-29.322-32.864-64.848-32.864-106.584 0-35.548 5.998-71.738 18-108.64 11.958-36.886 31.524-69.814 58.954-98.838 27.334-29.096 59.144-43.616 95.284-43.616 40.288 0 71.76 13.502 94.332 40.492 22.476 26.954 33.756 60.98 33.756 101.962 0 34.904-5.954 71.454-17.906 109.664-11.894 38.262-31.752 72.784-59.466 103.52zM1658.858 1512.573c-64.358 64.424-141.86 96.57-232.572 96.57h-1097.142c-90.712 0-168.14-32.146-232.572-96.57-64.424-64.286-96.57-141.86-96.57-232.572v-1097.142c0-90.712 32.146-168.288 96.57-232.712 64.432-64.146 142-96.432 232.572-96.432h1097.142c90.712 0 168.214 32.286 232.572 96.57 64.432 64.432 96.644 141.86 96.644 232.572v1097.142c0 90.712-32.22 168.288-96.644 232.572zM1297.81 1154.159v-392.126c0-18.154-14.856-33.016-33.016-33.016h-12.156c-18.162 0-33.016 14.856-33.016 33.016v392.126c0 16.12-2.34 29.578 20.188 32.41v52.172l-173.43-142.24c2.004-3.716 3.906-6.092 5.712-9.208 15.242-26.976 23.004-60.526 23.004-101.53 0-31.43-5.238-59.662-15.858-84.598-10.57-24.928-23.428-45.29-38.43-60.972-15.002-15.74-30.048-30.128-45.092-43.074-15.046-12.976-27.904-26.506-38.436-40.55-10.614-14-15.894-28.474-15.894-43.476 0-15.024 6.854-30.288 20.524-45.67 13.62-15.426 30.376-30.376 50.19-45.144 19.85-14.666 39.658-30.946 59.472-48.662 19.858-17.694 36.52-40.456 50.14-68.096 13.722-27.744 20.568-58.288 20.568-91.86 0-44.288-11.294-84.282-33.806-119.882-22.58-35.446-51.998-63.73-88.144-84.472-36.242-20.882-75-36.6-116.334-47.214-41.42-10.518-82.52-15.806-123.568-15.806-25.908 0-52.048 1.996-78.336 6.1-26.382 4.096-52.81 11.33-79.426 21.526-26.668 10.262-50.286 22.864-70.758 37.998-20.524 14.98-37.046 34.312-49.716 57.856-12.668 23.552-18.958 50.022-18.958 79.426 0 34.882 9.714 67.24 29.192 97.404 19.478 29.944 45.282 54.952 77.378 74.76 55.998 34.838 143.858 56.364 263.432 64.498-27.334 34.172-41.048 66.334-41.048 96.432 0 17.122 4.476 35.474 13.334 55.288-14.284-1.996-28.994-3.124-44.002-3.124-64.234 0-118.476 20.882-162.524 62.932-44.046 41.976-66.048 94.522-66.048 158.048 0 6.642 0.19 12.492 0.672 18.974h-261.046l393.618 342.17h651.856l-60.24-47.024v-82.996c22.368-2.874 20.004-16.318 20.004-32.394zM900.382 544.929c-7.52 1.36-18.088 2.122-31.708 2.122-29.382 0-58.288-2.596-86.666-7.782-28.38-5.046-56.378-13.568-83.998-25.592-27.722-11.952-50.096-29.528-67.146-52.766-17.144-23.208-25.666-50.542-25.666-81.994 0-29.974 7.52-56.714 22.572-80.004 15.002-23.142 34.808-41.26 59.428-54.236 24.62-12.998 50.432-22.814 77.378-29.264 26.998-6.408 54.476-9.736 82.476-9.736 55.376 0 103.050 12.47 143.046 37.406 39.906 24.928 59.904 63.422 59.904 115.382 0 10.928-1.522 21.686-4.528 32.19-3.138 10.62-6.24 19.712-9.282 27.26-3.050 7.41-8.858 16.332-17.43 26.616-8.522 10.314-15.046 17.934-19.434 23.004-4.476 5.238-12.852 12.712-25.19 22.594-12.236 9.926-20.048 16.114-23.522 18.402-3.43 2.406-12.332 8.908-26.668 19.456-14.328 10.634-22.184 16.274-23.566 16.94z" />
          <title>google-scholar icon</title>

          </svg>

        </a>      
        <a className="link dim round dib h3 w2-5  mr6 pa2 grow"  target='blank' href="https://www.linkedin.com/in/garrett-millar-571493a6/" title='LinkedIn'>
          <svg x="0px" y="0px" viewBox="0 0 48 48" style={{fill: '#2D3539'}}> >
          <path fill="#2D3539" d="M48,42c0,3.313-2.687,6-6,6H6c-3.313,0-6-2.687-6-6V6 c0-3.313,2.687-6,6-6h36c3.313,0,6,2.687,6,6V42z"
          ></path>
          <g >
            <g >
              <path fill="#000" d="M15.731,11.633c-1.608,0-2.658,1.083-2.625,2.527c-0.033,1.378,1.018,2.494,2.593,2.494 c1.641,0,2.691-1.116,2.691-2.494C18.357,12.716,17.339,11.633,15.731,11.633z M13.237,35.557h4.988V18.508h-4.988V35.557z M31.712,18.748c-1.595,0-3.222-0.329-4.956,2.36h-0.099l-0.087-2.599h-4.417c0.065,1.411,0.074,3.518,0.074,5.52v11.529h4.988 v-9.854c0-0.46,0.065-0.919,0.196-1.248c0.328-0.919,1.149-1.871,2.527-1.871c1.805,0,2.527,1.411,2.527,3.479v9.494h4.988V25.439 C37.455,20.713,34.993,18.748,31.712,18.748z"
              ></path>
            </g>
          </g>
        </svg>
        </a>

  <small className="f6 db hint-text pv3 tc footer-text">© 2019 GARRETT MILLAR, ALL RIGHTS RESERVED</small>
</footer>
</section>

    )
  }
}
export default Footer

