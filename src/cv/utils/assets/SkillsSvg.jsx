import { G, Path, Svg } from '@react-pdf/renderer';

const UserSvg = () => (
  <Svg viewBox="0 0 14 14" height={16}>
    <G>
      <Path
        d="M12.25 1.75H6.125C6.125 0.783562 5.34144 0 4.375 0H1.75C0.783562 0 0 0.783562 0 1.75V4.375H14V3.5C14 2.53356 13.2164 1.75 12.25 1.75ZM0 12.25C0 13.2164 0.783562 14 1.75 14H12.25C13.2164 14 14 13.2164 14 12.25V5.25H0V12.25Z"
        fill="white"
      />
    </G>
  </Svg>
);

export default UserSvg;
