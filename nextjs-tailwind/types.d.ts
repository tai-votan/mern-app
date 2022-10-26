declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}
declare module "*.svg" {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement;
  const url: string;
  export default url;
}
