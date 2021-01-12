import {  DatePickerCalendar } from './components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import moment from 'moment'
import MomentUtils from '@date-io/moment';
import 'moment/locale/pt-br';

function App() {
  return (
    <MuiPickersUtilsProvider libInstance={moment} utils={MomentUtils}>  
      <DatePickerCalendar />
    </MuiPickersUtilsProvider>
  );
}

export default App;
