
import Dataprovider, { 
  MenProvider, 
  WomenProvider, 
  Under1000, 
  Under5000, 
  Under10000, 
  Under20000, 
  Under20000plus 
} from './Dattaprovider';

const CombinedProvider = ({ children }) => {
  return (
    <Dataprovider>
      <MenProvider>
        <WomenProvider>
          <Under1000>
            <Under5000>
              <Under10000>
                <Under20000>
                  <Under20000plus>
                    {children}
                  </Under20000plus>
                </Under20000>
              </Under10000>
            </Under5000>
          </Under1000>
        </WomenProvider>
      </MenProvider>
    </Dataprovider>
  );
};

export default CombinedProvider;
