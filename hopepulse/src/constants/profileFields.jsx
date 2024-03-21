const profileFields = [
  {
    labelText: "First Name",
    labelFor: "first_name",
    id: "first_name",
    name: "first_name",
    type: "text",
    autoComplete: "given-name",
    isRequired: false,
    placeholder: "First name"
  },
  {
    labelText: "Last Name",
    labelFor: "last_name",
    id: "last_name",
    name: "last_name",
    type: "text",
    autoComplete: "family-name",
    isRequired: false,
    placeholder: "Last name"
  },
  {
    labelText: "phone Number",
    labelFor: "telephone_number",
    id: "telephone_number",
    name: "telephone_number",
    type: "tel",
    autoComplete: "tel",
    isRequired: false,
    placeholder: "Phone number"
  },
  {
    labelText: "CIN",
    labelFor: "cin",
    id: "cin",
    name: "cin",
    type: "text",
    autoComplete: "off",
    isRequired: false,
    placeholder: "CIN"
  }
];

export {profileFields}
