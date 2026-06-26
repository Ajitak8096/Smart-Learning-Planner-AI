import { useEffect, useState } from "react";
import { getDashboard } from "../services/dashboardService";

export default function useDashboard() {

    const [dashboard, setDashboard] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchDashboard();
    }, []);

    const fetchDashboard = async () => {

        try {

            const response = await getDashboard();

            setDashboard(response.dashboard);

        } catch (error) {

            console.log(error);

        } finally {

            setLoading(false);

        }

    };

    return {
        dashboard,
        loading,
        refreshDashboard: fetchDashboard,
    };

}