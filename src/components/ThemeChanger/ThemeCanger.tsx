import Select, { SingleValue } from "react-select";

enum SelectValue {
  Light = "light",
  Dark = "dark",
}

interface ISelectOption {
  label: "Dark" | "Light";
  value: SelectValue;
}

export const ThemeChanger = () => {
  const options: ISelectOption[] = [
    { label: "Dark", value: SelectValue.Dark },
    { label: "Light", value: SelectValue.Light },
  ];

  const setTheme = (option: SingleValue<ISelectOption>) => {
    if (option) {
      const html = document.getElementsByTagName("html");
      option.value === SelectValue.Dark
        ? html[0].setAttribute("theme", SelectValue.Dark)
        : html[0].setAttribute("theme", SelectValue.Light);
    }
  };

  return (
    <Select
      options={options}
      onChange={(value) => setTheme(value)}
      placeholder="Theme"
      styles={{
        container: (provided) => ({
          ...provided,
          position: "relative",
          top: 5,
          width: "fit-content",
          fontFamily: "Bebas Neue",
          fontSize: "24px",
          fontWeight: 700,
          fontStyle: "normal",
          lineHeight: "32px",
          "@media (min-width: 768px)": {
            fontSize: "28px",
            lineHeight: "36px",
          },
        }),
      }}
    />
  );
};
