import React, { useEffect, useState } from "react";
import LandingView from './view';
import { request } from 'graphql-request'
import { USER_INFO, PROJECTS } from "./graph-queries";
import { PageContext } from "../../lib/context";

const endpoint = 'https://api-ap-northeast-1.graphcms.com/v2/ckcid5f372enm01xr7kwb3pjy/master'

const LandingController = () => {
  const [userInfo, setUserInfo] = useState([])
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  
  useEffect(()=>{
    async function requests () {
      const {userinfos} = await request(endpoint, USER_INFO)
      setUserInfo(userinfos)
      const {projects:data} = await request(endpoint, PROJECTS)
      setProjects(data)
      setTimeout(() => {
        setLoading(false)
      }, 1000);
    }

    requests()
  },[])

  const values = {
    userInfo,
    projects,
    loading
  }

  return (
    <PageContext.Provider value={values}>
      <LandingView/>
    </PageContext.Provider>
  );
};

export default LandingController;
