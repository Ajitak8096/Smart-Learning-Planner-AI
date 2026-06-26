import { useEffect, useState } from "react";
import { getProfile } from "../services/userService";

export default function useProfile() {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchProfile = async () => {

        try {

            const data = await getProfile();

            setUser(data);

        } catch (err) {

            console.log(err);

        } finally {

            setLoading(false);

        }

    };

    useEffect(() => {

        fetchProfile();

    }, []);

    return {

        user,

        loading,

        refresh: fetchProfile,

    };

}