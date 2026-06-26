const data = await getDashboardData(req.user.id);
res.json(data);