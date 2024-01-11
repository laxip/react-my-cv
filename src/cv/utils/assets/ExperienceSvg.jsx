import { G, Path, Svg } from '@react-pdf/renderer';

const HeartSvg = () => (
  <Svg viewBox="0 0 16 16" height={16}>
    <G>
      <Path
        d="M14.125 3.75H11.75C11.75 1.67894 10.0711 0 8 0C5.92894 0 4.25 1.67894 4.25 3.75H1.875C0.839469 3.75 0 4.58947 0 5.625V14.125C0 15.1605 0.839469 16 1.875 16H14.125C15.1605 16 16 15.1605 16 14.125V5.625C16 4.58947 15.1605 3.75 14.125 3.75ZM8 1.875C9.03553 1.875 9.875 2.71447 9.875 3.75H6.125C6.125 2.71447 6.96447 1.875 8 1.875ZM12.5625 8.125V8.75C12.5625 9.26778 12.1428 9.6875 11.625 9.6875C11.1072 9.6875 10.6875 9.26778 10.6875 8.75V8.125H5.3125V8.75C5.3125 9.26778 4.89278 9.6875 4.375 9.6875C3.85722 9.6875 3.4375 9.26778 3.4375 8.75V8.125C2.91972 8.125 2.5 7.70528 2.5 7.1875C2.5 6.66972 2.91972 6.25 3.4375 6.25H12.5625C13.0803 6.25 13.5 6.66972 13.5 7.1875C13.5 7.70528 13.0803 8.125 12.5625 8.125Z"
        fill="white"
      />
    </G>
  </Svg>
);

export default HeartSvg;