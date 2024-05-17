import com.facebook.react.bridge.JSIModulePackage;
import com.swmansion.reanimated.ReanimatedJSIModulePackage;

public class MainApplication extends Application implements ReactApplication {

    // Ajoutez cette méthode à votre classe MainApplication
    @Override
    protected JSIModulePackage getJSIModulePackage() {
        return new ReanimatedJSIModulePackage(); // Reanimated specific
    }

}
