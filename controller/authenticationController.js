exports.loginRequest = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const dbConnection = req.dbConnect;

        console.log(username);
        console.log(password);

        let loginSuccess = await dbConnection.query(`SELECT * FROM public.user_master_table WHERE username='${username}' AND password='${password}'`);
        if(loginSuccess.rows.length>0)
            res.status(200).json({ resultStr: 'success' });
        else
            res.status(401).json({ resultStr: 'error' });
    }

    catch (e) {
        res.status(500).json({ resultStr : 'server_error' });
    }
};