const loginFields=[
  {
      labelText:"Email address",
      labelFor:"email-address",
      id:"email-address",
      name:"email",
      type:"email",
      autoComplete:"email",
      isRequired:true,
      placeholder:"Email address"   
  },
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"Password"   
  }
]

const signupFields=[
  {
      labelText:"Username",
      labelFor:"username",
      id:"username",
      name:"username",
      type:"text",
      autoComplete:"username",
      isRequired:true,
      placeholder:"Username"   
  },
  {
      labelText:"Email address",
      labelFor:"email-address",
      id:"email-address",
      name:"email",
      type:"email",
      autoComplete:"email",
      isRequired:true,
      placeholder:"Email address"   
  },
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"Password"   
  },
  {
      labelText:"Confirm Password",
      labelFor:"confirm-password",
      id:"confirm-password",
      name:"confirm-password",
      type:"password",
      autoComplete:"confirm-password",
      isRequired:true,
      placeholder:"Confirm Password"   
  },
]
const campaignFields = [
  {
    id: 'campaignName',
    labelText: 'Campaign Name',
    labelFor: 'campaignName',
    name: 'campaignName',
    type: 'text',
    isRequired: true,
    placeholder: 'Campaign Name',
  },
  {
    id: 'campaignOwner',
    labelText: 'Campaign Owner',
    labelFor: 'campaignOwner',
    name: 'campaignOwner',
    type: 'text',
    isRequired: true,
    placeholder: 'Campaign Owner',
  },
  {
    id: 'deadline',
    labelText: 'Deadline',
    labelFor: 'deadline',
    name: 'deadline',
    type: 'date',
    isRequired: true,
    placeholder: 'Deadline',
  },
  {
    id: 'campaignDescription',
    labelText: 'Campaign Description',
    labelFor: 'campaignDescription',
    name: 'campaignDescription',
    type: 'textarea',
    isRequired: true,
    placeholder: 'Campaign Description',
  },
  {
    id: 'telephoneNumber',
    labelText: 'Telephone Number',
    labelFor: 'telephoneNumber',
    name: 'telephoneNumber',
    type: 'tel',
    isRequired: true,
    placeholder: 'Telephone Number',
  },
  {
    id: 'beneficiary',
    labelText: 'Beneficiary',
    labelFor: 'beneficiary',
    name: 'beneficiary',
    type: 'text',
    isRequired: true,
    placeholder: 'Beneficiary',
  },
  {
    id: 'budget',
    labelText: 'Budget on Target',
    labelFor: 'budget',
    name: 'budget',
    type: 'number',
    isRequired: true,
    placeholder: 'Budget on Target',
  },
];

export default campaignFields;


export {loginFields, signupFields, campaignFields};
