npm install bcryptjs

2 arguments required for bcrypt

  const hashedPassword = await bcrypt.hash(req.body.password, 10);

1. password
2. length of the "salt"(10 in this case.) Typically the salt length is stored in the user database as it's a constantly changing value.