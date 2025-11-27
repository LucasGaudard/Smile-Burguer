import logoSmileBurguer from '../assets/logoSmileBurguer.png';

type LogoProps = {
  width?: string;
  className?: string;
};

export default function Logo({ width = "55px", className }: LogoProps) {
  return (
    <img
      src={logoSmileBurguer}
      alt="Logo Smile Burguer"
      style={{ width }}
      className={className}
    />
  );
}
