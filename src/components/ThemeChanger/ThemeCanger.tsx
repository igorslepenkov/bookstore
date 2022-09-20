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
          justifySelf: "flex-end",
          width: "fit-content",
          fontFamily: "Bebas Neue",
          fontSize: "14px",
          fontWeight: 700,
          fontStyle: "normal",
          lineHeight: "16px",
          "@media (min-width: 768px)": {
            fontSize: "16px",
            lineHeight: "18px",
          },
        }),
      }}
    />
  );
};
