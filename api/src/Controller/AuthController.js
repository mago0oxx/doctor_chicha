const jwtCheck = require('../Auth0/middleware/middleware')

const controllerAuth = async (req, res) => {
    const { redirectUrl } = req.query;
    const loginOptions = {
      state: redirectUrl ? JSON.stringify({ redirectUrl }) : undefined
    };
    jwtCheck
    const userId = req.user.sub;
    auth0Client.authorize(loginOptions);
  } 
  
  const tokenValidator = (req, res) => {
    const { hash } = req.query;
    auth0Client.parseHash({ hash }, (err, authResult) => {
      if (err) {
        console.log(err);
        res.redirect('/');
      } else {
        const { accessToken, idToken } = authResult;
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        res.cookie('access_token', accessToken, { httpOnly: true });
        res.cookie('id_token', idToken, { httpOnly: true });
        res.cookie('expires_at', expiresAt, { httpOnly: true });
        const redirectUrl = req.query.state ? JSON.parse(req.query.state).redirectUrl : '/';
        res.redirect(redirectUrl);
      }
    });
  }
  
  const logOut = (req, res) => {
    res.clearCookie('access_token');
    res.clearCookie('id_token');
    res.clearCookie('expires_at');
    res.redirect('/');
  }