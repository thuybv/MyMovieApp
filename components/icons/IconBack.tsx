import * as React from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';
const IconBack = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    fill="none"
    {...props}>
    <Path
      stroke={props.color ?? '#fff'}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M4.25 12.274h15M10.3 18.299l-6.05-6.024L10.3 6.25"
    />
  </Svg>
);
export default IconBack;
