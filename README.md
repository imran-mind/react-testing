
Jest-> jest is test framwork or runner it provides test env for running test cases

"@testing-library/jest-dom": "^5.11.4",
"@testing-library/react": "^11.1.0",
"@testing-library/user-event": "^12.1.10",

testing-library -> is a assertion library and provides feasibility to work with DOM level testing
it also gives feature UserEvent.type(input,'React'); its same like user is typing somthing on input box 
so we can test actual user behaviour by using this library it has many modules like above.
it's an alternate of Enzyme assertion library.


snapshot testing-> 
test('snapshot test',()=>{
    const tree = renderer.create(<InputApp/>).toJSON();
    expect(tree).toMatchSnapshot()
  })
  
  using toMatchSnapshot() method we take a snapshot of that component and jest automatically creates __snapshots__ folder and keep
  snapshots of component, in future if something change in the related component then snapshot test case failed and gives
  error message like jest found some mismatch in previous snapshot and current , so you want to continue with the changes
  or this is something which might break in production system.
  
  so snapshot testing is very useful when we have large system because once we have stable the components then in next test phase
  it will automatically shows the diff ,by using this testing we can easly figure out the error.