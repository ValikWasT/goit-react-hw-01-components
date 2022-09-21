import PropTypes from 'prop-types';
import { Box } from 'utils/Box';
import {
  TableHead,
  TableRow,
  TableBody,
  TableBox,
  TableHeadBox,
} from './TransactionHistoryStyled';

export const TransactionTable = ({ transaction }) => {
  return (
    <Box width={200} bg="#000">
      <Box as="table" width={1} border="1px solid">
        <TableHead>
          <TableRow>
            <TableHeadBox>Type</TableHeadBox>
            <TableHeadBox>Amount</TableHeadBox>
            <TableHeadBox>Currency</TableHeadBox>
          </TableRow>
        </TableHead>

        <TableBody>
          {transaction.map(t => (
            <TableRow key={t.id}>
              <TableBox>{t.type}</TableBox>
              <TableBox>{t.amount}</TableBox>
              <TableBox>{t.currency}</TableBox>
            </TableRow>
          ))}
        </TableBody>
      </Box>
    </Box>
  );
};
TransactionTable.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
