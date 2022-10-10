import { useMemo } from 'react';
import { Sidebar } from '../../components/layout/Sidebar/Sidebar';
import { Wrapper } from '../../components/layout/Wrapper';
import { useChainNotifications } from '../../hooks/useChainNotifications';
import { useMobileDetect } from '../../hooks/useMobileDetect';
import { groupBy } from '../../utils/groupBy';
import { shortenString } from '../../utils/shortenString';
import { Container, Heading, ListItem, List, Cell, NotificationItem, BlockInformation, BlockHeight, BlockData } from './ChainInformation.styles';
import { chainHeadings } from './constant';

export function ChainInformation() {
  const notifications = useChainNotifications();
  const mobileView = useMobileDetect();

  const formattedNotifications = useMemo(() => {
    if(notifications.length) return groupBy(notifications, 'Height')
    return []
  }, [notifications]);

  const headingsToDisplay = useMemo(() => {
    if(mobileView) return ['Height', 'Block ID', 'Rewards'];
    return chainHeadings;
  }, [mobileView])

  return (
    <Wrapper>
      <Sidebar />
      <Container>
        <List>
        {headingsToDisplay.map((item: string) => (
          <ListItem fullWidth={mobileView} key={item}>
            <Heading>{item}</Heading>
          </ListItem>
        ))}
        </List>
        <List column>
          {Object.keys(formattedNotifications).length > 0 && Object.keys(formattedNotifications).map((item: any) => (
            <NotificationItem key={item}>
              <BlockHeight mobile={mobileView}>
                <Cell>{item}</Cell>
              </BlockHeight>
              <BlockData>
                {formattedNotifications[item].map((block: any) => (
                  <BlockInformation key={block.blockId['/']}>
                    <Cell mobile={mobileView}>{shortenString(block.blockId['/'], 4, 4)}</Cell>
                   {!mobileView &&
                    <>
                      <Cell>{block.Miner}</Cell>
                        {/* Todo: Tags */}
                        <Cell>--</Cell>
                        {/* Todo: Messages */}
                        <Cell>--</Cell>
                    </> 
                    }
                    {/* Todo: Rewards */}
                    <Cell mobile={mobileView}>{block.Reward || '100 FIL'}</Cell>
                  </BlockInformation>
                ))}
              </BlockData>
            </NotificationItem>
          ))}
        </List>
      </Container>
    </Wrapper>
  )
}
