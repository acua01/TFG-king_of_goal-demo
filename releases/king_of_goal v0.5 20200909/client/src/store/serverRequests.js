import axios from 'axios';
import {types} from './reducer';
import {showSnackbar, showMessages, strToBool} from '../shared/utils';

export const useActionsServerRequests = (state, dispatch) => {

  const askForFirstLoad = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/first_load', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'players',
        data:{
          all: response.data.players
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section:'countries',
        data:{
          all: response.data.countries
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cardsTypes',
        data:{
          all: response.data.cardsTypes
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section:'leagues',
        data:{
          all: response.data.leagues
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section:'teams',
        data:{
          all: response.data.teams
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section:'positions',
        data:{
          all: response.data.positions
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cards',
        data:{
          all: response.data.cards
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'clubCards',
        data: {
          all: response.data.club_cards
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'packs',
        data: {
          all: response.data.packs
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== AUTHENTICATION ===============================================*/

  const sendRequestToRegisterUser = async(history, data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/register', data);

      history.push('/login');

      showSnackbar('success', 'Te has registrado correctamente.');

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToLoginUser = async(history, data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/login', data);

      axios.defaults.headers.common['api_token'] = response.data.token;

      sessionStorage.setItem('token', response.data.token);
      sessionStorage.setItem('admin', response.data.is_admin);
      sessionStorage.setItem('username', response.data.user.username);
      //sessionStorage.setItem('cards', JSON.stringify(response.data.club_cards));

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data:{
          auth: true,
          admin: response.data.is_admin,
          username: response.data.user.username,
          club: response.data.user.id_club ? response.data.club : false,
          //cards: response.data.club_cards
        }
      });

      //askForFirstLoad();

      if(response.data.user.id_club){
        sessionStorage.setItem('club', JSON.stringify(response.data.club));
        history.push('/inicio');
      }else{
        sessionStorage.setItem('club', '');
        history.push('/crear_club');
      }

      showSnackbar('success', 'Has iniciado sesión correctamente.');

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END AUTHENTICATION ===========================================*/

  /*========== PERMISSIONS ==================================================*/

  const askForAllPermissions = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/permissions');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'permissions',
        data:{
          all: response.data.permissions
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertPermission = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_permission', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'permissions',
        data:{
          all: response.data.permissions
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeletePermission = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_permission', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'permissions',
        data:{
          all: response.data.permissions
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdatePermission = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_permission', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'permissions',
        data:{
          all: response.data.permissions
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END PERMISSIONS ==============================================*/

  /*========== PLAYERS ======================================================*/

  const askForAllPlayers = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/players');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'players',
        data:{
          all: response.data.players
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertPlayer = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_player', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'players',
        data:{
          all: response.data.players
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeletePlayer = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_player', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'players',
        data:{
          all: response.data.players
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdatePlayer = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_player', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'players',
        data:{
          all: response.data.players
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END PLAYERS ==================================================*/

  /*========== COUNTRIES ====================================================*/

  const askForAllCountries = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/countries');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'countries',
        data:{
          all: response.data.countries
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertCountry = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_country', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'countries',
        data:{
          all: response.data.countries
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeleteCountry = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_country', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'countries',
        data:{
          all: response.data.countries
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdateCountry = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_country', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'countries',
        data:{
          all: response.data.countries
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END COUNTRIES ================================================*/

  /*========== LEAGUES ======================================================*/

  const askForAllLeagues = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/leagues');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'leagues',
        data:{
          all: response.data.leagues
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertLeague = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_league', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'leagues',
        data:{
          all: response.data.leagues
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeleteLeague = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_league', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'leagues',
        data:{
          all: response.data.leagues
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdateLeague = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_league', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'leagues',
        data:{
          all: response.data.leagues
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END LEAGUES ==================================================*/

  /*========== CARDS TYPES ==================================================*/

  const askForAllCardsTypes = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/cards_types');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cardsTypes',
        data:{
          all: response.data.cardsTypes
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertCardType = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_card_type', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cardsTypes',
        data:{
          all: response.data.cardsTypes
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeleteCardType = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_card_type', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cardsTypes',
        data:{
          all: response.data.cardsTypes
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdateCardType = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_card_type', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cardsTypes',
        data:{
          all: response.data.cardsTypes
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END CARDS TYPES ==============================================*/

  /*========== TEAMS TYPES ==================================================*/

  const askForAllTeams = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/teams');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'teams',
        data:{
          all: response.data.teams
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertTeam = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_team', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'teams',
        data:{
          all: response.data.teams
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeleteTeam = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_team', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'teams',
        data:{
          all: response.data.teams
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdateTeam = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_team', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'teams',
        data:{
          all: response.data.teams
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END TEAMS TYPES ==============================================*/

  /*========== POSITIONS TYPES ==============================================*/

  const askForAllPositions = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/positions');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'positions',
        data:{
          all: response.data.positions
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END POSITIONS TYPES ==========================================*/

  /*========== CARDS ========================================================*/

  const askForAllCards = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/cards');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cards',
        data:{
          all: response.data.cards
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertCard = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_card', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cards',
        data:{
          all: response.data.cards
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeleteCard = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_card', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cards',
        data:{
          all: response.data.cards
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdateCard = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_card', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'cards',
        data:{
          all: response.data.cards
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END CARDS ====================================================*/

  /*========== CLUBS ========================================================*/

  const sendRequestToCreateClub = async(history, data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/create_club', data);

      sessionStorage.setItem('club', JSON.stringify(response.data.club));

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data:{
          auth: true,
          admin: strToBool(sessionStorage.getItem('admin')),
          username: sessionStorage.getItem('username'),
          club: response.data.club
        }
      });

      history.push('/inicio');

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdateClub = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_club', data);

      sessionStorage.setItem('club', JSON.stringify(response.data.club));

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data:{
          auth: true,
          admin: strToBool(sessionStorage.getItem('admin')),
          username: sessionStorage.getItem('username'),
          club: response.data.club
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeleteClub = async(history, data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_club', data);

      sessionStorage.setItem('token', '');
      sessionStorage.setItem('admin', '');
      sessionStorage.setItem('username', '');
      sessionStorage.setItem('club', '');

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data:{
          auth: false,
          admin: false,
          username: '',
          club: false
        }
      });

      history.push('/login');

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToSellCard = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/sell_card', data);

      sessionStorage.setItem('club', JSON.stringify(response.data.club));

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data:{
          auth: true,
          admin: strToBool(sessionStorage.getItem('admin')),
          username: sessionStorage.getItem('username'),
          club: response.data.club
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'clubCards',
        data:{
          all: response.data.club_cards
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToSaveCards = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/save_cards', data);

      console.log(response);

      sessionStorage.setItem('club', JSON.stringify(response.data.club));

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data:{
          auth: true,
          admin: strToBool(sessionStorage.getItem('admin')),
          username: sessionStorage.getItem('username'),
          club: response.data.club
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'clubCards',
        data:{
          all: response.data.club_cards
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END CLUBS ====================================================*/

  /*========== PACKS ======================================================*/

  const askForAllPacks = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/packs');

      dispatch({
        type: types.GENERAL_TYPE,
        section:'packs',
        data:{
          all: response.data.packs
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToInsertPack = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/insert_pack', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'packs',
        data:{
          all: response.data.packs
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToDeletePack = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/delete_pack', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'packs',
        data:{
          all: response.data.packs
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToUpdatePack = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/update_pack', data);

      dispatch({
        type: types.GENERAL_TYPE,
        section:'packs',
        data:{
          all: response.data.packs
        }
      });

      showSnackbar('success', response.data.message);

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e) {
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  const sendRequestToOpenPack = async(data) => {
    try{
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: true,
          message: 'Cargando...'
        }
      });

      const response = await axios.post('/open_pack', data);

      sessionStorage.setItem('club', JSON.stringify(response.data.club));

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'authentication',
        data:{
          auth: true,
          admin: strToBool(sessionStorage.getItem('admin')),
          username: sessionStorage.getItem('username'),
          club: response.data.club
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section:'packCards',
        data:{
          all: response.data.cards
        }
      });

      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });
    }catch(e){
      dispatch({
        type: types.GENERAL_TYPE,
        section: 'loader',
        data: {
          isLoading: false,
          message: ''
        }
      });

      showMessages('error', e);
    }
  }

  /*========== END PACKS ==================================================*/

  return {

    askForFirstLoad,

    /*---------- Authentication ---------------------------------------------*/

    sendRequestToRegisterUser,
    sendRequestToLoginUser,

    /*---------- End Authentication -----------------------------------------*/

    /*---------- Permissions ------------------------------------------------*/

    askForAllPermissions,
    sendRequestToInsertPermission,
    sendRequestToDeletePermission,
    sendRequestToUpdatePermission,

    /*---------- End Permissions --------------------------------------------*/

    /*---------- Players ----------------------------------------------------*/

    askForAllPlayers,
    sendRequestToInsertPlayer,
    sendRequestToDeletePlayer,
    sendRequestToUpdatePlayer,

    /*---------- End Players ------------------------------------------------*/

    /*---------- Countries --------------------------------------------------*/

    askForAllCountries,
    sendRequestToInsertCountry,
    sendRequestToDeleteCountry,
    sendRequestToUpdateCountry,

    /*---------- End Countries ----------------------------------------------*/

    /*---------- Leagues ----------------------------------------------------*/

    askForAllLeagues,
    sendRequestToInsertLeague,
    sendRequestToDeleteLeague,
    sendRequestToUpdateLeague,

    /*---------- End Leagues ------------------------------------------------*/

    /*---------- Cards types ------------------------------------------------*/

    askForAllCardsTypes,
    sendRequestToInsertCardType,
    sendRequestToDeleteCardType,
    sendRequestToUpdateCardType,

    /*---------- End Cards types --------------------------------------------*/

    /*---------- Teams ------------------------------------------------------*/

    askForAllTeams,
    sendRequestToInsertTeam,
    sendRequestToDeleteTeam,
    sendRequestToUpdateTeam,

    /*---------- End Teams --------------------------------------------------*/

    /*---------- Positions --------------------------------------------------*/

    askForAllPositions,

    /*---------- End Positions ----------------------------------------------*/

    /*---------- Cards ------------------------------------------------------*/

    askForAllCards,
    sendRequestToInsertCard,
    sendRequestToDeleteCard,
    sendRequestToUpdateCard,

    /*---------- End Cards --------------------------------------------------*/

    /*---------- Clubs ------------------------------------------------------*/

    sendRequestToCreateClub,
    sendRequestToUpdateClub,
    sendRequestToDeleteClub,
    sendRequestToSellCard,
    sendRequestToSaveCards,

    /*---------- End Clubs --------------------------------------------------*/

    /*---------- Packs ----------------------------------------------------*/

    askForAllPacks,
    sendRequestToInsertPack,
    sendRequestToDeletePack,
    sendRequestToUpdatePack,
    sendRequestToOpenPack

    /*---------- End Packs ------------------------------------------------*/

  };
};
