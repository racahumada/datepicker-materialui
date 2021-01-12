import { DatePickerSingle } from './components';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

function App() {
  return (
    <>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <DatePickerSingle />
      </MuiPickersUtilsProvider>
    </>
  );
}

export default App;
