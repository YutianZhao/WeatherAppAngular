import { TestBed } from "@angular/core/testing"
import { ProfileService } from "./profile.service"
import { Profile } from "./profile";
import { City } from "./city";

describe('ProfileService', () => {
    let city: City[] = [
        {
            cityName: 'city',
            countryCode: 'CO'
        }
    ];
    let profiles: Profile[];
    let service: ProfileService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [ProfileService]
        });
        service = TestBed.get(ProfileService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should save new profile', () => {
        service.saveNewProfile(city);
        expect(city.length).toEqual(1);
    });

    it('should get profiles', () => {
        profiles = service.getProfiles();
        expect(profiles.length).toEqual(1);
        expect(profiles[0].cities[0].cityName).toEqual('New York');
    });

    it('should delete profile', () => {
        profiles = service.getProfiles();
        service.deleteProfile(profiles[0]);
        expect(profiles.length).toEqual(0);
    })
});