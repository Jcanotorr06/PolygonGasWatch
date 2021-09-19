import {Table, TableBody, TableHead, TableCell, TableContainer, TableRow, Container, Typography} from '@mui/material'
import { styled } from '@mui/system';
import Section from './Section'

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const StyledTableHeader = styled(TableRow)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#000000' : theme.palette.action.hover
}))

const StyledTableContainer = styled(TableContainer)(({theme}) => ({
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.palette.mode === 'dark' ? '#363738' : theme.palette.action.hover
}))

interface transaction{
    name: string
    interaction: string
    gasUsed: number
    fastest: number
    fast: number
    standard: number
}

const transactions : transaction[] = [
    {
        name: 'MATIC',
        interaction: 'Transfer',
        gasUsed: 21000,
        fastest: 0.0035,
        fast: 0.0015,
        standard: 0.0005
    },
    {
        name: 'ETH',
        interaction: 'Transfer',
        gasUsed: 21000,
        fastest: 0.0035,
        fast: 0.0015,
        standard: 0.0005
    },
    {
        name: 'USDT',
        interaction: 'Transfer',
        gasUsed: 21000,
        fastest: 0.0035,
        fast: 0.0015,
        standard: 0.0005
    },
    {
        name: 'USDC',
        interaction: 'Transfer',
        gasUsed: 21000,
        fastest: 0.0035,
        fast: 0.0015,
        standard: 0.0005
    },
    {
        name: 'DAI',
        interaction: 'Transfer',
        gasUsed: 21000,
        fastest: 0.0035,
        fast: 0.0015,
        standard: 0.0005
    },
    {
        name: 'QuickSwap',
        interaction: 'Swap',
        gasUsed: 21000,
        fastest: 0.0035,
        fast: 0.0015,
        standard: 0.0005
    },
    {
        name: 'SushiSwap',
        interaction: 'Swap',
        gasUsed: 21000,
        fastest: 0.0035,
        fast: 0.0015,
        standard: 0.0005
    },
    {
        name: 'DFYN',
        interaction: 'Swap',
        gasUsed: 21000,
        fastest: 0.0035,
        fast: 0.0015,
        standard: 0.0005
    },
    {
        name: 'AAVE',
        interaction: 'Lend',
        gasUsed: 21000,
        fastest: 0.0035,
        fast: 0.0015,
        standard: 0.0005
    },
]

const PriceTable = () => {
    return (
        <Container maxWidth="xl">
            <Section padding={6}>
                <Typography variant="h5" textAlign="center" marginBottom={3}>Estimated Cost of Transactions</Typography>
                <StyledTableContainer>
                    <Table>
                        <TableHead>
                            <StyledTableHeader>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Interaction
                                </TableCell>
                                <TableCell>
                                    Gas Used
                                </TableCell>
                                <TableCell>
                                    Fastest
                                </TableCell>
                                <TableCell>
                                    Fast
                                </TableCell>
                                <TableCell>
                                    Standard
                                </TableCell>
                            </StyledTableHeader>
                        </TableHead>
                        <TableBody>
                            {transactions.map((transaction, i) => (
                                <StyledTableRow key={i}>
                                    <TableCell>
                                        {transaction.name}
                                    </TableCell>
                                    <TableCell>
                                        {transaction.interaction}
                                    </TableCell>
                                    <TableCell>
                                        {transaction.gasUsed}
                                    </TableCell>
                                    <TableCell>
                                        {`$${transaction.fastest}`}
                                    </TableCell>
                                    <TableCell>
                                        {`$${transaction.fast}`}
                                    </TableCell>
                                    <TableCell>
                                        {`$${transaction.standard}`}
                                    </TableCell>

                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </StyledTableContainer>
            </Section>
        </Container>
    )
}

export default PriceTable
