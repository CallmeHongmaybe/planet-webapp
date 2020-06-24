import React from "react";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 540 550"
    >
      <defs>
        <filter id="f1" width="200%" height="200%" x="0" y="0">
          <feOffset dx="10" dy="10" in="SourceAlpha" result="offOut"></feOffset>
          <feGaussianBlur
            in="offOut"
            result="blurOut"
            stdDeviation="20"
          ></feGaussianBlur>
          <feBlend in="SourceGraphic" in2="offOut"></feBlend>
        </filter>
      </defs>
      <path
        fill="#fff"
        d="M337.596 423.946l-6.098 16.19-26.797-44.207-12.26-55.827 47.688-5.011 4.014 32.952zm-88.589 9.334l-6.719 17.777-27.639-45.652-12.255-55.712 49.153-5.163 4.014 32.863zm256.681-274.025l-2.385-22.895a6.545 6.545 0 00-2.404-4.437 6.624 6.624 0 00-4.839-1.431l-44.035 4.639c-6.818-5.358-14.678-7.811-21.358-8.953-.12-6.664-1.709-22.042-12.826-34.626-7.75-8.775-18.602-14.038-31.407-15.239-2.232-13.514-7.257-26.07-14.19-35.441l-.242-2.311 7.236-.758c1.75-.183 3.325-1.038 4.433-2.407s1.618-3.086 1.433-4.837l-2.402-22.872a6.544 6.544 0 00-2.405-4.434 6.613 6.613 0 00-4.835-1.431l-68.634 7.202a6.535 6.535 0 00-4.431 2.405 6.54 6.54 0 00-1.433 4.836l1.034 9.857c-.443.192-.889.391-1.336.593l-12.639-13.153a6.614 6.614 0 00-5.433-1.983l-23.185 2.425a6.637 6.637 0 00-4.431 2.405 6.542 6.542 0 00-1.433 4.835l.456 4.343.492 4.87a75.72 75.72 0 00-2.04.116l-5.488-10.956a6.551 6.551 0 00-5.891-3.639 5.93 5.93 0 00-.69.036l-24.233 2.53a6.632 6.632 0 00-5.68 4.846l-4.679 17.441c-4.513-1.568-9.668-2.459-15.346-2.651l-1.067-10.178a6.544 6.544 0 00-2.408-4.437 6.622 6.622 0 00-4.839-1.43l-25.405 2.683a6.605 6.605 0 00-5.456 4.178c-3.787-1.338-8.017-2.018-12.585-2.018-1.721 0-3.523.096-5.358.289l-29.902 3.139a6.546 6.546 0 00-4.433 2.407 6.545 6.545 0 00-1.433 4.834l6.947 66.117c-17.814 12.528-21.359 30.417-19.058 46.812-13.153 3.766-29.194 13.621-36.294 26.953L6.17 182.042a6.598 6.598 0 00-5.867 7.24l2.402 22.883a6.538 6.538 0 002.409 4.434 6.607 6.607 0 004.838 1.43l7.236-.766 4.556 43.539a6.543 6.543 0 002.405 4.433 6.6 6.6 0 004.148 1.471c.228 0 .457-.014.688-.038l3.325-.348c-4.215 12.081-3.029 26.454 3.319 39.647 10.531 21.891 32.383 35.491 57.032 35.491a73.42 73.42 0 008.427-.497c8.234 13.059 26.906 14.582 40.295 14.582 5.751 0 12.203-.322 20.183-.997l3.927 32.283-6.554 55.901-13.344 35.384-13.966 5.248a5.815 5.815 0 00-3.577 6.922l4.102 15.593a5.825 5.825 0 002.982 3.702 5.813 5.813 0 004.747.236l29.846-11.615a5.828 5.828 0 003.5-3.887l18.968-69.387 27.33 68.606a5.815 5.815 0 007.501 3.269l40.978-15.86a5.817 5.817 0 003.709-5.676l-1.041-23.572 11.366-36.743 27.538 69.118a5.814 5.814 0 007.501 3.269l40.991-15.88a5.816 5.816 0 003.709-5.676l-.947-21.481 10.068-38.005 27.275 68.476a5.816 5.816 0 005.402 3.665c.7 0 1.409-.127 2.1-.397l41.006-15.902a5.814 5.814 0 003.707-5.676l-.942-21.42a5.82 5.82 0 00-5.809-5.559c-.557 0-1.115.077-1.657.24l-19.121 5.685-29.55-48.781-12.016-54.727c21.599-2.078 45.029-6.338 56.769-26.002 25.378-2.899 43.299-23.061 49.822-41.842 5.716-16.457 4.038-32.829-4.579-45.162l7.988-.841a6.6 6.6 0 005.861-7.24l-4.558-43.575 7.226-.753c3.611-.377 6.243-3.622 5.868-7.235z"
        filter="url(#f1)"
      ></path>
      <path
        fill="#688716"
        d="M299.548 104.478l-2.207.204 1.675 16.064 2.214-.264c5.107-.621 10.878-2.221 10.15-9.153-.563-5.367-4.322-7.542-11.831-6.85zm8.253 97.619l13.887-1.455-9.06-19.994zm172.738-44.633l5.247 50.133-16.678 1.755-5.271-50.131-31.743 3.365 1.126 10.714 18.816-1.971 1.476 14.151-18.805 1.986 1.158 11.09 19.835-2.106 1.5 14.172-36.536 3.823-6.743-64.273 78.923-8.305 1.478 14.159zm-84.469 59.574l-34.906-36.386 4.154 39.615-32.441 3.413-5.342-10.735-22.971 2.422-3.276 11.644-51.081 5.36-6.733-64.278 16.682-1.749 5.266 50.124 22.115-2.324 13.998-52.151 18.223-1.917 28.197 55.436-6.042-57.779 16.675-1.737 34.867 36.281-4.123-39.513 16.67-1.765 6.752 64.272zm-189.277-84.462c-.966-9.154 1.986-18.019 8.31-24.962 5.992-6.573 14.63-10.893 23.704-11.853 9.075-.954 18.425 1.472 25.659 6.664 7.636 5.478 12.37 13.546 13.33 22.71 1.05 10.012-1.563 19.433-7.356 26.535-5.771 7.074-14.448 11.548-24.435 12.598l-.013.002c-20.583 2.143-37.066-11.186-39.198-31.697zm30.326 74.33c-3.388 3.858-8.848 6.209-16.232 6.985l-9.512 1.025 2.23 21.297-16.689 1.756-6.736-64.26 25.537-2.697c15.04-1.583 24.11 5.053 25.542 18.69.778 7.398-.614 13.185-4.14 17.204zm-50.101-38.587l-16.683 1.779-6.737-64.266 36.875-3.879 1.485 14.148-20.188 2.126 1.137 10.733 18.291-1.923 1.496 14.151-18.301 1.926zm-60.156 77.018l-6.721-64.234 36.488-3.856 1.485 14.146-19.827 2.074 1.143 10.734 18.793-1.993 1.479 14.151-18.78 1.986 1.15 11.073 19.811-2.074 1.474 14.148zm-24.602 2.59l-2.752-26.347-24.102 2.532 2.766 26.339-16.678 1.753-5.245-50.082-12.608 1.327 5.248 50.089-16.689 1.756-5.244-50.097-13.797 1.455-1.485-14.151 59.769-6.283 2.596 24.77 24.094-2.528-2.605-24.764 16.699-1.774 6.728 64.256zm6.67-207.064l25.542-2.682c7.182-.751 13.027.349 17.369 3.275 4.685 3.161 7.439 8.35 8.178 15.428.779 7.401-.619 13.19-4.16 17.211-3.394 3.855-8.87 6.205-16.276 6.984l-9.469.998 2.243 21.308-16.674 1.747zm69.992-7.352l5.252 50.12 22.117-2.322 13.993-52.162 18.227-1.903 30.929 61.734-17.799 1.862-5.345-10.724-22.978 2.431-3.262 11.615-51.075 5.38-6.746-64.272zm123.811 122.628l-16.692 1.756-6.737-64.228 24.947-2.629c6.577-.689 12.252.374 16.416 3.075 4.543 2.95 7.299 7.919 7.972 14.368.885 8.348-2.573 15.267-9.25 18.507l-2.697 1.307 22.739 23.987-20.783 2.182-18.52-23.249zm-21.13-133.422l34.879 36.301-4.151-39.535 58.827-6.174 1.486 14.146-13.788 1.446 5.248 50.122-16.673 1.765-5.26-50.12-11.667 1.218 5.264 50.112-16.688 1.756-34.886-36.364 4.134 39.587-16.664 1.629-6.736-64.145zm217.534 137.218l-.454-4.369-1.477-14.155-.454-4.369-46.334 4.882c-6.502-5.84-17.926-9.727-26.618-9.906 2.14-17.356-6.92-49.346-43.157-49.387-1.444-13.748-6.39-28.69-14.757-39.228l-1.123-10.709 13.788-1.447-.46-4.366-1.943-18.508-68.634 7.201.457 4.367 1.094 10.424c-3.178 1.183-6.466 2.628-9.858 4.347l-15.934-16.584-23.183 2.425.46 4.367 1.246 12.298c-4.367-.422-8.553-.236-13.203.371l-7.526-15.024-24.237 2.529-.781 2.916-5.967 22.235c-6.277-4.322-15.499-5.946-25.571-5.422l-1.69-16.137-25.406 2.683.458 4.364.614 5.84a20.927 20.927 0 00-4.201-3.755c-5.22-3.517-12.04-4.861-20.272-3.999l-29.903 3.141.457 4.365 6.876 65.419c-18.026 10.237-23.707 32.622-18.093 48.679-15.302 2.513-32.893 13.63-40.709 28.361l-2.694.283.002.005-43.092 4.524.457 4.365L8.8 207.112l.46 4.365 13.794-1.458 5.244 50.097 15.751-1.657c-22.451 28.101 6.654 85.138 60.832 75.276 5.665 16.087 29.793 16.55 57.314 14.148l-.752-6.186L66.73 291.44l10.633-23.615 22.414 9.121-1.948-7.072 10.176-2.366 7.85 19.212 48.378 35.325-1.329-19.26 20.19-2.101 5.612 18.974 14.445-13.09-46.331-24.607 10.588-23.577 22.428 9.089-1.954-7.067 10.169-2.37 7.856 19.226 16.383 11.968 8.297-7.517 1.227-27.371 17.816 1.251-.481 11.067 15.018-19.303 13.87 9.379-1.564-5.641 10.173-2.379 7.858 19.241 17.117 12.5 9.028-8.187 1.271-27.395 17.818 1.241-.498 11.049 15.756-20.238 15.394 26.827-24.493 19.809 15.873-1.69 5.615 19.005 41.879-37.947 1.264-27.376 17.793 1.262-.495 11.05 15.76-20.241 15.387 26.797-81.652 66.065 1.113 5.067c22.673-2.053 45.795-5.866 55.537-25.933 42.505-1.93 64.215-54.163 41.932-81.37-3.363-4.105-5.318-4.635-5.318-4.635l20.017-2.112-5.245-50.127 9.42-.985zm-279.521 25.357c-2.343-.814-5.473-.488-8.498-.169l-.027.001-2.826.289 1.689 16.023 2.821-.285c5.889-.625 11.979-1.273 11.161-9.121-.386-3.706-1.758-5.845-4.319-6.737zm-88.08-116.966c5.898-.644 11.998-1.309 11.177-9.127-.867-8.157-6.429-7.578-12.858-6.904l-2.817.285 1.683 16.037zm99.853-20.501l-4.831 21.434 13.892-1.458zm29.056 79.191c-.962-9.039-10.271-16.075-19.919-15.061-4.774.501-9.132 2.814-12.274 6.508-3.047 3.585-4.537 8.091-4.085 12.358.556 5.301 2.958 9.982 6.765 13.181a17.687 17.687 0 0011.191 4.18s1.096-.007 2.12-.115 2.238-.337 2.238-.337c9.107-2.031 15.007-10.566 13.964-20.715zm53.781 182.176l-25.512 20.612 1.041 4.736 51.096-5.371-.761-6.25zm-89.393 8.899l-26.196 21.19 1.042 4.724 52.571-5.522-.763-6.256zm42.061-34.018l-11.077 8.955 17.356-1.825 5.613 18.997 13.778-12.49zm-24.519 19.824l11.912 8.697-1.201-17.356zm100.507-.628l-1.133-16.351-10.089 8.159zm7.084 65.029l-6.68 57.04-.096.251-8.899 23.623-3.459 1.045-31.601-52.133-.079-.354-15.303-69.673 29.871-24.139 30.44 16.158 5.835 47.92zm-73.404-50.163l-6.557-22.188-12.387 1.306 1.69 24.438-24.13-17.616 31.214-25.239 33.745 17.932zm-15.175 59.507l-6.689 57.026-9.563 25.3-3.583 1.096-32.371-53.47-15.404-70.019 30.554-24.716 31.231 16.565 5.858 47.959zm158.823 64.62l-32.376-53.444-15.378-70.042 80.85-65.413-10.272-17.895-20.204 25.951.923-20.53-9.055-.643-1.139 24.713-48.4 43.856-6.556-22.19-12.384 1.32 1.69 24.424-23.44-17.11 40.26-32.565-10.284-17.922-20.2 25.946.923-20.519-9.075-.636-1.149 24.734-13.021 11.808-21.003-15.336-6.915-16.928-2.086.487 3.522 12.711-20.334-13.749-20.934 26.903.892-20.519-9.076-.639-1.107 24.707-12.295 11.138-20.267-14.803-6.911-16.913-2.082.486 3.106 11.235-26.756-10.844-7.173 15.974 48.22 25.61-24.242 21.971-6.556-22.168-12.356 1.289 1.684 24.43-56.984-41.611-6.907-16.904-2.093.487 3.099 11.247-26.742-10.879-7.21 16.01 93.101 49.402 5.829 47.921-6.718 57.3-14.524 38.514-16.433 6.175 4.102 15.593 29.843-11.615 23.547-86.143 33.759 84.744 40.977-15.861-1.086-24.581 16.529-53.428 33.627 84.407 40.991-15.88-.985-22.371.087-.324 14.716-55.55 33.788 84.829 41.006-15.904-.942-21.42z"
      ></path>
    </svg>
  );
}

export default Logo;