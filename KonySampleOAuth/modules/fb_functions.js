function fbLogin()
{
  frmLoad.show();
  providerSelected="Facebook";
  login(facebook.provider_name,displayFbProfile,profile);
}

function displayFbProfile(profile)
{
  	var raw_res=profile.user_attributes.raw_response;
  	var full_name=JSON.parse(raw_res).name;
  var u_id=profile.userid;
  var p_p="https://graph.facebook.com/"+u_id+"/picture?width=300&height=300";
  	var first_name=profile.firstname;
  	var last_name=profile.lastname;
  	var email=profile.email;
  	displayProfile(first_name,last_name,full_name,email,p_p);
  	frmProfile.headers[0].lblTitle.text="Facebook Profile";
  	frmProfile.footers[0].btnInvokeService.setVisibility(false);
} 