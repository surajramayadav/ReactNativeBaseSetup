import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 25,
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contentCenter: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formItem: {marginTop: 10, height: 30},
  note: {
    fontSize: 8,
    color: '#d7d7d7',
  },
  messagePreview: {
    fontSize: 12,
    color: '#444',
  },
  //
  chattrAvatarBadge: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    padding: 4,
    paddingTop: 0,
    paddingBottom: 0,
    borderRadius: 50,
  },
  badgeRed: {
    backgroundColor: 'rgba(175,27,0,1)',
  },
  badgeBlue: {
    backgroundColor: 'rgba(0,0,255,0.5)',
  },
  badgeGreen: {
    backgroundColor: 'rgba(0,255,0,0.5)',
  },
  badgeYellow: {
    backgroundColor: 'rgba(0,255,255,0.5)',
  },
  //COLOR SCHEMATICS
  center: {
    width: '100%',
    textAlign: 'center',
  },
  blueText: {
    color: '#797979',
    fontSize: 10,
  },
  blackText: {
    color: '#000',
    fontSize: 10,
  },
  whiteText: {
    color: '#FFF',
    fontSize: 10,
  },
  black: {
    color: 'black',
  },
  grey: {
    color: '#797979',
  },
  blue: {
    color: '#86A4D3',
  },
  aliceBlue: {
    color: '#f3f9fb',
  },
  cadetBlue: {
    color: '#65abbc',
  },
  skyBlue: {
    color: '#86c4d3',
  },
  skyBlueDark: {
    color: '#65abbc',
  },
  aliceBlue: {
    color: '#f3f9fb',
  },
  cadetBlue: {
    color: '#65abbc',
  },
  honeyDew: {
    color: '#e8f8f2',
  },
  indianRed: {
    color: '#dd576d',
  },
  whiteSmoke: {
    color: '#f2f2f2',
  },
  darkGrey: {
    color: '#a6a6a6',
  },
  lavendarBlush: {
    color: '#fceef0',
  },
  cornflowerBlue: {
    color: '#86a4d3',
  },
  //FOOTER
  footer: {
    height: windowHeight * 0.06,
  },
  footerBtn: {
    height: '100%',
  },
  //KANBAN
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
  },
  hederName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  board: {
    paddingVertical: 16,
    backgroundColor: '#E0E8EF',
  },
  column: {
    // minHeight:'100%',
    height:windowHeight*0.76,
    backgroundColor: '#F8FAFB',
    marginLeft: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
  },
  columnName: {
    marginBottom: 16,
    fontWeight: 'bold',
  },
  addColumn: {
    marginRight: 12,
    padding: 12,
    minWidth: windowWidth * 0.6,
  },
  card: {
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#F6F7FB',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginBottom: 12,
  },
  addCard: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(233, 233, 233)',
    borderRadius: 4,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#F5F6F8',
  },
});
export default styles;
