const loginFields=[
  {
    labelText:"email",
    labelFor:"email",
    id:"email",
    name:"email",
    type:"email",
    autoComplete:"email",
    isRequired:true,
    placeholder:"email address"   
},
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"password"   
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
      placeholder:"username"   
  },
  {
      labelText:"Email address",
      labelFor:"email-address",
      id:"email",
      name:"email",
      type:"email",
      autoComplete:"email",
      isRequired:true,
      placeholder:"email address"   
  },
  {
      labelText:"Password",
      labelFor:"password",
      id:"password",
      name:"password",
      type:"password",
      autoComplete:"current-password",
      isRequired:true,
      placeholder:"password"   
  },
  {
      labelText:"Confirm Password",
      labelFor:"re_password",
      id:"re_password",
      name:"re_password",
      type:"password",
      autoComplete:"confirm-password",
      isRequired:true,
      placeholder:"confirm password"   
  },
]
const campaignFields = [
  {
    id: 'name',
    labelText: 'Campaign Name',
    labelFor: 'name',
    name: 'name',
    type: 'text',
    isRequired: true,
    placeholder: 'Campaign Name',
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
    id: 'goal',
    labelText: "budget",
    labelFor: 'budget',
    name: 'goal',
    type: 'number',
    isRequired: true,
    placeholder: "Campaign's goal",
  },
];

export {loginFields, signupFields, campaignFields};
