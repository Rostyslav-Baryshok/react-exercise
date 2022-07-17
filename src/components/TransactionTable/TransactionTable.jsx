import {
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableHeadRow,
  TableHeader,
  TableBodyText,
} from '../user-interface/table';

import transactionsData from 'mock/transactions.json';
import { Container } from 'components/user-interface/Container';

export const TransactionTable = () => {
  return (
    <Container>
      <Table>
        <TableHead>
          <TableHeadRow>
            <TableHeader>type</TableHeader>
            <TableHeader>amount</TableHeader>
            <TableHeader>created</TableHeader>
            <TableHeader>fee</TableHeader>
          </TableHeadRow>
        </TableHead>
        <TableBody>
          {transactionsData.transactions.map(
            ({ id, type, amount, created, fee }) => (
              <TableRow type={type} key={id}>
                <TableBodyText>
                  {type[0].toUpperCase() + type.slice(1)}
                </TableBodyText>
                <TableBodyText>{amount}</TableBodyText>
                <TableBodyText>{created}</TableBodyText>
                <TableBodyText>{fee}</TableBodyText>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </Container>
  );
};
