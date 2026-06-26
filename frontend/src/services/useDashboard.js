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

            const data = await getDashboard();

            setDashboard(data.dashboard);

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