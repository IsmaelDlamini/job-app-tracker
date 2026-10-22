import { useRouter } from 'expo-router';
import { useAuth } from '@/services/auth-context';
import {useState} from 'react';
import { KeyboardAvoidingView , View, ScrollView} from 'react-native';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Text } from '@/components/ui/text';
import { Button } from 'expo-router/react-navigation';
import { Input } from '@/components/ui/input';
// import { ScrollView } from 'react-native-gesture-handler';
// import { ScrollView} from 'react-native-reanimated/lib/typescript/Animated';


export interface AuthMode {
    mode: 'signIn' | 'signUp';
}


export const AuthScreen: React.FC<AuthMode> = ({ mode }: AuthMode) => {

    const router = useRouter();
    const [ signIn, signUp ] = useAuth();

    const [isSignUp, setIsSignUp] = useState(mode === 'signUp');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return <KeyboardAvoidingView>
        <ScrollView>
            <Card>
                

                <CardHeader>
                <CardTitle>
                    {isSignUp ? 'Create an Account' : 'Sign In'}
                </CardTitle>
                <CardDescription>
                    {isSignUp ? 'Start Tracking your job Applications' : 'welcome back'}
                </CardDescription>
                </CardHeader>


                <CardContent>


                    <View>

                        <Text>
                            Email Address
                        </Text>
                        <Input placeholder='Example: user@example.com' 
                        
                                 value={email}
                                onChangeText={setEmail}
                         />
                    </View>
                    <View>
                        <Text>
                            Password
                        </Text>
                        <Input placeholder='Enter your password' secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        />
                    </View>
                </CardContent>

                <Button>
                  
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                
                </Button>

            </Card>
        </ScrollView>
    </KeyboardAvoidingView>
    

}