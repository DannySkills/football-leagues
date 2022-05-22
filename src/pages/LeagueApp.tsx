import React, {useState, useEffect} from 'react'
import LeagueList from '../components/LeagueList'
import {LeagueService} from '../services/league.service'
import {League} from '../interfaces/league';

const LeagueApp = () => {
    const [leagues, setLeagues] = useState<League[]>([] as League[])
    
    const fetchLeagues = async (): Promise<void> => {
        const data: League[] = await LeagueService.getFootballLeagues()
        setLeagues(data)
    }

    useEffect(() => {
        fetchLeagues()
    }, [])
    
    return (
    <div>
        <LeagueList leagues={leagues} />
    </div>
  )
}

export default LeagueApp